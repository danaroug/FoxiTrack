import React, { useEffect, useState } from 'react';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch('https://localhost:7054/api/jobs', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to load jobs.');
        }

        const data = await response.json();
        setJobs(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Fetch error:', err);
          setError('Unable to load jobs right now.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h2>Job Applications</h2>

      {jobs.length === 0 ? (
        <div>
          <h3>No jobs yet</h3>
          <p>Start tracking your applications by adding your first job entry.</p>
        </div>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> at {job.company} — {job.status}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default JobsList;