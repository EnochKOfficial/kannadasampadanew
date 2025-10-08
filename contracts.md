# Kannada Sampada Backend Integration Contracts

## Overview
Backend implementation to serve download links and fetch latest YouTube videos from the Kannada Sampada channel.

## Data Sources

### 1. YouTube Channel
- **Channel URL**: https://www.youtube.com/@KannadaSampada
- **Purpose**: Fetch latest videos to display in "Latest Videos" section

### 2. Download Links

#### Passing Package
- **Title**: PUC Passing Package
- **Link**: https://drive.google.com/file/d/10Tjhkd9WVT58Xfi7amABct2hw-1Ksjy5/view

#### Notes
- **I PUC Notes**: https://drive.google.com/file/d/1hq0JuRUQ_-gv4FFXztkUFXSK9NzEZAds/view
- **II PUC Notes**: https://drive.google.com/file/d/1h9Is2hFCuSFyzhEI5sDoWluV9TpoN-DF/view

#### PYQ (Previous Year Questions)
- **I PUC PYQ**: https://drive.google.com/drive/folders/1D3QK84-JfN8IFDjSad67mFoSSIOQwuiU
- **II PUC PYQ**: https://drive.google.com/drive/folders/1tPGvZmy5DmnlDhKf_dl-SX-5IeyfToaP

## Backend API Endpoints

### 1. GET /api/passing-packages
**Response:**
```json
[
  {
    "id": "1",
    "title": "PUC Passing Package",
    "downloadUrl": "https://drive.google.com/file/d/10Tjhkd9WVT58Xfi7amABct2hw-1Ksjy5/view",
    "category": "passing"
  }
]
```

### 2. GET /api/notes
**Response:**
```json
[
  {
    "id": "1",
    "title": "I PUC Notes",
    "downloadUrl": "https://drive.google.com/file/d/1hq0JuRUQ_-gv4FFXztkUFXSK9NzEZAds/view",
    "category": "notes"
  },
  {
    "id": "2",
    "title": "II PUC Notes",
    "downloadUrl": "https://drive.google.com/file/d/1h9Is2hFCuSFyzhEI5sDoWluV9TpoN-DF/view",
    "category": "notes"
  }
]
```

### 3. GET /api/pyq
**Response:**
```json
[
  {
    "id": "1",
    "title": "I PUC PYQ",
    "downloadUrl": "https://drive.google.com/drive/folders/1D3QK84-JfN8IFDjSad67mFoSSIOQwuiU",
    "category": "pyq"
  },
  {
    "id": "2",
    "title": "II PUC PYQ",
    "downloadUrl": "https://drive.google.com/drive/folders/1tPGvZmy5DmnlDhKf_dl-SX-5IeyfToaP",
    "category": "pyq"
  }
]
```

### 4. GET /api/videos
**Purpose**: Fetch latest videos from YouTube channel
**Response:**
```json
[
  {
    "id": "video_id",
    "title": "Video Title",
    "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
    "publishedAt": "2024-01-01T00:00:00Z"
  }
]
```

## Frontend Integration Changes

### Remove Mock Data
Files to update:
- `/app/frontend/src/pages/Home.jsx`

### Add API Calls
Replace mock data arrays with API calls using axios:
- `passingPackages` → API call to `/api/passing-packages`
- `notes` → API call to `/api/notes`
- `pyq` → API call to `/api/pyq`
- `videos` → API call to `/api/videos`

### Update Download Handler
Change from `console.log` to opening the actual `downloadUrl` in a new tab:
```javascript
const handleDownload = (item) => {
  window.open(item.downloadUrl, '_blank');
};
```

### Update Video Click Handler
Add click handler to open YouTube video:
```javascript
const handleVideoClick = (video) => {
  window.open(video.videoUrl, '_blank');
};
```

## Implementation Steps
1. Install required packages (if needed for YouTube API)
2. Create backend API routes
3. Implement YouTube video fetching
4. Update frontend to consume APIs
5. Test all download links and video playback
