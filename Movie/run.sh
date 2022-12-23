#!bash

mkdir output
input="./Movie/*"
output="./output/"
extention="_output.mp4"
for filepath in `ls ./Movie`; do
    # object detection
    python detectron2/demo/demo.py --config-file detectron2/configs/COCO-Detection/faster_rcnn_X_101_32x8d_FPN_3x.yaml --video-input $input$filepath --confidence-threshold 0.6 --output $output$filepath$extention --opts MODEL.WEIGHTS detectron2://COCO-Detection/faster_rcnn_X_101_32x8d_FPN_3x/139173657/model_final_68b088.pkl
    # panoptic segmentation
    # python detectron2/demo/demo.py --config-file detectron2/configs/COCO-PanopticSegmentation/panoptic_fpn_R_101_3x.yaml --video-input $input$filepath --confidence-threshold 0.6 --output $output$filepath$extention --opts MODEL.WEIGHTS detectron2://COCO-PanopticSegmentation/panoptic_fpn_R_101_3x/139514519/model_final_cafdb1.pkl
    # keypoint detection
    # python detectron2/demo/demo.py --config-file detectron2/configs/COCO-Keypoints/keypoint_rcnn_X_101_32x8d_FPN_3x.yaml --video-input $input$filepath --confidence-threshold 0.6 --output $output$filepath$extention --opts MODEL.WEIGHTS detectron2://COCO-Keypoints/keypoint_rcnn_X_101_32x8d_FPN_3x/139686956/model_final_5ad38f.pkl
    # instance segmentation
    # python detectron2/demo/demo.py --config-file detectron2/configs/Misc/cascade_mask_rcnn_X_152_32x8d_FPN_IN5k_gn_dconv.yaml --video-input $input$filepath --confidence-threshold 0.6 --output $output$filepath$extention --opts MODEL.WEIGHTS detectron2://Misc/cascade_mask_rcnn_X_152_32x8d_FPN_IN5k_gn_dconv/18131413/model_0039999_e76410.pkl
done