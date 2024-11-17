import video_4 from '../assets/video/4.mp4';
import video_24 from '../assets/video/24.mp4';
import video_35 from '../assets/video/35.mp4';
import video_38 from '../assets/video/38.mp4';
import video_39 from '../assets/video/39.mp4';
import video_60 from '../assets/video/60.mp4';


export const videos = [
    { id: 4, title: '第4話-花椰菜', src: video_4 },
    { id: 24, title: '第24話-房子', src: video_24 },
    { id: 35, title: '第35話-曼波魚', src: video_35 },
    { id: 38, title: '第38話-手杖①', src: video_38 },
    { id: 39, title: '第39話-手杖②', src: video_39 },
    { id: 60, title: '第60話-除草證書', src: video_60 }
];

export const videoProps = {
    controls: true,
    controlsList: "noplaybackrate nodownload",
    disablePictureInPicture: true,
};