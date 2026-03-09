import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App'


const Submissions = ({token}) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(backendUrl+ '/api/image/submissions', {headers:{token}});
        console.log(response.data);
        if (response.data.success) {
          setSubmissions(response.data.submissions);
        } else {
          console.error('Failed to fetch submissions');
        }
      } catch (error) {
        console.error('Error fetching submissions:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [token]);

  if (loading) {
    return <p>Loading submissions...</p>;
  }

  return (
  <div>
      <h1>Image Submissions</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {submissions.map((submission, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>Picture  {index + 1}</h2>
            <img
              src={submission.imageUrl}
              alt={`Submission ${index + 1}`}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h3 className='mt-5'>{submission.name}</h3>
            <p>{submission.phone}</p>
            
            {/* Download button */}
            <a 
              href={submission.imageUrl} 
              download={`Image_${index + 1}.jpg`} 
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Submissions