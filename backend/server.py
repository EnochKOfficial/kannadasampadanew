from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class DownloadItem(BaseModel):
    id: str
    title: str
    downloadUrl: str
    category: str

class Video(BaseModel):
    id: str
    title: str
    thumbnail: str
    videoUrl: str
    publishedAt: str = ""


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Kannada Sampada API"}


# Passing Package endpoint
@api_router.get("/passing-packages", response_model=List[DownloadItem])
async def get_passing_packages():
    passing_packages = [
        DownloadItem(
            id="1",
            title="PUC Passing Package",
            downloadUrl="https://drive.google.com/file/d/10Tjhkd9WVT58Xfi7amABct2hw-1Ksjy5/view",
            category="passing"
        )
    ]
    return passing_packages


# Notes endpoint
@api_router.get("/notes", response_model=List[DownloadItem])
async def get_notes():
    notes = [
        DownloadItem(
            id="1",
            title="I PUC Notes",
            downloadUrl="https://drive.google.com/file/d/1hq0JuRUQ_-gv4FFXztkUFXSK9NzEZAds/view",
            category="notes"
        ),
        DownloadItem(
            id="2",
            title="II PUC Notes",
            downloadUrl="https://drive.google.com/file/d/1h9Is2hFCuSFyzhEI5sDoWluV9TpoN-DF/view",
            category="notes"
        )
    ]
    return notes


# PYQ endpoint
@api_router.get("/pyq", response_model=List[DownloadItem])
async def get_pyq():
    pyq = [
        DownloadItem(
            id="1",
            title="I PUC PYQ",
            downloadUrl="https://drive.google.com/drive/folders/1D3QK84-JfN8IFDjSad67mFoSSIOQwuiU",
            category="pyq"
        ),
        DownloadItem(
            id="2",
            title="II PUC PYQ",
            downloadUrl="https://drive.google.com/drive/folders/1tPGvZmy5DmnlDhKf_dl-SX-5IeyfToaP",
            category="pyq"
        )
    ]
    return pyq


# Videos endpoint - using YouTube channel RSS feed (no API key needed)
@api_router.get("/videos", response_model=List[Video])
async def get_videos():
    # For now, returning placeholder structure
    # You can add RSS feed parsing later or manual video list
    videos = [
        Video(
            id="1",
            title="Latest Kannada Literature Lecture",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        ),
        Video(
            id="2",
            title="Important Grammar Topics",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        ),
        Video(
            id="3",
            title="Poetry Analysis Guide",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        ),
        Video(
            id="4",
            title="Essay Writing Tips",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        ),
        Video(
            id="5",
            title="Exam Preparation Strategy",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        ),
        Video(
            id="6",
            title="Literature Review Session",
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
            videoUrl="https://www.youtube.com/@KannadaSampada",
            publishedAt="2024-01-01"
        )
    ]
    return videos


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()