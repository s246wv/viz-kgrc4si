# viz-kgrc4si

## 概要
本リポジトリでは、社会問題をテーマにした「知識グラフ推論チャレンジ」で提供される動画を可視化したデータを提供しています。[こちらのページ](https://s246wv.github.io/viz-kgrc4si/)にアクセスすることで、対応する動画を表示することが可能です。  
*なお、動画データは最新のものではなく、公式リポジトリで2022年12月28日に公開された最新バージョンの動画を使用しています*

## 謝辞と説明
本リポジトリのデータは、[kgrc4si_202212ブランチ](https://github.com/KnowledgeGraphJapan/KGRC-RDF/tree/kgrc4si_202212/Movie)で公開されているデータを基に作成されています。  
[インスタンスセグメンテーション](./Movie/instance-segmentation/)、[キーポイント検出](./Movie/keypoint-detection/)、[オブジェクト検出](./Movie/object-detection/)、および[パノプティックセグメンテーション](./Movie/panoptic-segmentation/)の処理には、[detectron2](https://github.com/facebookresearch/detectron2)フレームワークを採用しています。  
[動画キャプション生成](./Movie/video-caption/)には[PDVC](https://github.com/ttengwang/PDVC)を、[PointCloudデータ](./PointCloud/)の生成には[point-e](https://github.com/openai/point-e/tree/main/point_e)を使用しています。  
複数の動画を同期表示するためには、[mediagroup.js](https://github.com/rwaldron/mediagroup.js)ライブラリを採用しています。
