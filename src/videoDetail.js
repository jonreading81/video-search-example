import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const URL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="video-detail-player embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={URL}></iframe>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );

}

export default VideoDetail;