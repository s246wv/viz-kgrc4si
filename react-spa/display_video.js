'use strict';

const e = React.createElement;
// const [selected, setSelected] = React.useState("");
const options = ["Admire_paintings0.mp4", "Admire_paintings1.mp4", "Browse_internet0.mp4", "Browse_internet1.mp4", "Brush_teeth0.mp4", "Brush_teeth1.mp4", "Carry_box0.mp4", "Carry_box1.mp4", "Change_TV_channel0.mp4", "Change_TV_channel1.mp4", "Clean_Fridge0.mp4", "Clean_Fridge1.mp4", "Clean_Kitchen_Table0.mp4", "Clean_Kitchen_Table1.mp4", "Clean_Kitchen_Television0.mp4", "Clean_Kitchen_Television1.mp4", "Clean_Living_Desk0.mp4", "Clean_Living_Desk1.mp4", "Clean_Stove0.mp4", "Clean_Stove1.mp4", "Clean_desk0.mp4", "Clean_desk1.mp4", "Cook_Food0.mp4", "Cook_Food1.mp4", "Cook_some_food0.mp4", "Cook_some_food1.mp4", "Drink0.mp4", "Drink1.mp4", "Eat_Bread0.mp4", "Eat_Bread1.mp4", "Find_some_food0.mp4", "Find_some_food1.mp4", "Go_to_sleep0.mp4", "Go_to_sleep1.mp4", "Go_to_toilet0.mp4", "Go_to_toilet1.mp4", "Prepare_Dinner0.mp4", "Prepare_Dinner1.mp4", "Prepare_Go_Out0.mp4", "Prepare_Go_Out1.mp4", "Prepare_breakfast0.mp4", "Prepare_breakfast1.mp4", "Prepare_sitting0.mp4", "Prepare_sitting1.mp4", "Put_Groceries_In_Fridge0.mp4", "Put_Groceries_In_Fridge1.mp4", "Put_food_in_Fridge0.mp4", "Put_food_in_Fridge1.mp4", "Read_book0.mp4", "Read_book1.mp4", "Relax_on_sofa0.mp4", "Relax_on_sofa1.mp4", "Take_a_nap0.mp4", "Take_a_nap1.mp4", "Take_off_clock0.mp4", "Take_off_clock1.mp4", "Throw_in_the_garbage0.mp4", "Throw_in_the_garbage1.mp4", "Use_smartphone0.mp4", "Use_smartphone1.mp4", "Wash_Fry_Pan0.mp4", "Wash_Fry_Pan1.mp4", "Wash_clothes0.mp4", "Wash_clothes1.mp4", "Wash_hands0.mp4", "Wash_hands1.mp4", "Wash_pillow0.mp4", "Wash_pillow1.mp4", "Watch_tv0.mp4", "Watch_tv1.mp4", "leaving_room0.mp4", "leaving_room1.mp4"];

class VideoViewer extends React.Component {
  // const VideoViewer = () => {
  constructor(props) {
    super(props);
    this.state = { option: options[0] }
  }
  
  render() {
    const selected = this.state.option;
    const opts = options.map(opt =>
      e(
        'option',
        {
          key: opt,
          value: opt
        },
        opt
      )
    );
    const content =
      [
        e(
          'select',
          {
            value: { selected },
            onChange: (ev) => { this.setState({ option: ev.target.value }); this.render()}
          },
          opts
        ),
        e('div', null, this.state.option),
        e('video', { class: "controller", controls: true, mediagroup: "pip" }, e('source', { src: "https://github.com/s246wv/viz-kgrc4si/blob/main/Movie/instance-segmentation/" + this.state.option + "_output.mp4?raw=true" }, null)),
        e('video', { mediagroup: "pip" }, e('source', { src: "https://github.com/s246wv/viz-kgrc4si/blob/main/Movie/keypoint-detection/" + this.state.option + "_output.mp4?raw=true" }, null)),
        e('video', { mediagroup: "pip" }, e('source', { src: "https://github.com/s246wv/viz-kgrc4si/blob/main/Movie/object-detection/" + this.state.option + "_output.mp4?raw=true" }, null)),
        e('video', { mediagroup: "pip" }, e('source', { src: "https://github.com/s246wv/viz-kgrc4si/blob/main/Movie/panoptic-segmentation/" + this.state.option + "_output.mp4?raw=true" }, null)),
        e('video', { mediagroup: "pip" }, e('source', { src: "https://github.com/s246wv/viz-kgrc4si/blob/main/Movie/video-caption/" + this.state.option + "?raw=true" }, null))
      ];
    
    return e(
      'div',
      null,
      content
    );
  };
}

const domContainer = document.querySelector('#display_video_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(VideoViewer));