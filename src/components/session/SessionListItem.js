import moment from 'moment';

export default function SessionListItem({session}) {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h4 className="card-title">{session.counselor.fullname}</h4>
        <h6 className="card-subtitle text-secondary">{session.counselor.email}</h6>
        <p className="card-text mt-2">This session will last {session.duration} mins.</p>
        <div className="text-center">
          <a href="/" className="btn btn-primary">Get an appointment</a>
        </div>
      </div>
      <div className="card-footer text-muted text-center">
        {
          moment(session.date + " " + session.startTime).format('LLL')
        }
      </div>
    </div>
  );
}
