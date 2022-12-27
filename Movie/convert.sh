#!bash

for file in `find -type f -name *.mp4`;do
    ffmpeg -i $file -vcodec libx264 temp.mp4
    mv temp.mp4 $file
done