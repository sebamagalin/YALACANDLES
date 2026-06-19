import os
import cv2
import shutil
from PIL import Image

def setup_directories():
    # Make sure clean folders exist
    dirs = [
        "assets/frames/hero",
        "assets/frames/lighting",
        "assets/products",
        "assets/details",
        "assets/experience",
        "assets/instagram"
    ]
    for d in dirs:
        os.makedirs(d, exist_ok=True)
        print(f"Directory ready: {d}")

def extract_hero_and_lighting_frames():
    video_path = "assets/frames/hero/hero.mov"
    if not os.path.exists(video_path):
        # Check parent folder or alternative name
        if os.path.exists("hero.mov"):
            video_path = "hero.mov"
        else:
            print(f"Error: Video file {video_path} not found.")
            return

    print(f"Extracting frames from: {video_path}")
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Failed to open video file.")
        return

    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Total video frames: {frame_count}")

    # Sequence 01 (Cloche Removal): Frames 0 to 210, taking every 2nd frame
    seq1_indices = [i for i in range(0, 211, 2)]
    print(f"Extracting {len(seq1_indices)} frames for Sequence 01 (Hero)...")
    for idx, f_idx in enumerate(seq1_indices):
        cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
        ret, frame = cap.read()
        if ret:
            # Resize to 1280x720 (optimized resolution)
            resized = cv2.resize(frame, (1280, 720))
            dest = f"assets/frames/hero/frame_{idx+1:04d}.webp"
            # Convert BGR to RGB
            rgb_frame = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(rgb_frame)
            img.save(dest, "WEBP", quality=75)
            if (idx + 1) % 20 == 0 or idx + 1 == len(seq1_indices):
                print(f"  Saved {dest}")

    # Sequence 02 (Lighting): Frames 211 to 420, taking every 2nd frame
    seq2_indices = [i for i in range(211, 421, 2)]
    print(f"Extracting {len(seq2_indices)} frames for Sequence 02 (Lighting)...")
    for idx, f_idx in enumerate(seq2_indices):
        cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
        ret, frame = cap.read()
        if ret:
            resized = cv2.resize(frame, (1280, 720))
            dest = f"assets/frames/lighting/frame_{idx+1:04d}.webp"
            rgb_frame = cv2.cvtColor(resized, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(rgb_frame)
            img.save(dest, "WEBP", quality=75)
            if (idx + 1) % 20 == 0 or idx + 1 == len(seq2_indices):
                print(f"  Saved {dest}")

    cap.release()

def optimize_other_images():
    # Convert all existing JPEGs/PNGs in other folders to WebP
    folders = [
        "assets/products",
        "assets/details",
        "assets/experience",
        "assets/instagram"
    ]
    for folder in folders:
        if os.path.exists(folder):
            print(f"Optimizing images in: {folder}")
            files = [f for f in os.listdir(folder) if not f.startswith(".")]
            for f in files:
                fp = os.path.join(folder, f)
                if f.lower().endswith((".jpeg", ".jpg", ".png")) and not os.path.isdir(fp):
                    try:
                        img = Image.open(fp)
                        name, _ = os.path.splitext(f)
                        dest = os.path.join(folder, f"{name}.webp")
                        img.save(dest, "WEBP", quality=80)
                        print(f"  Converted {fp} -> {dest}")
                        # Optionally delete original to save space
                        os.remove(fp)
                    except Exception as e:
                        print(f"  Error converting {fp}: {e}")

if __name__ == "__main__":
    setup_directories()
    extract_hero_and_lighting_frames()
    optimize_other_images()
    print("Frame extraction and optimization complete.")
