import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import image from "../assets/icons/asteroid.png";

import "./Selection.css";
export default function Selection() {
  const data_baremetal = ["Deep Neural net", "Convolutional Neural net", "Support Vector machine"];
  const data_text = ["Naive Bayes Classifier", "Word2Vec", "Bert", "Transformers"];
  const data_imgseg = ["U-Net", "Fast-FCN", "Mask-RCNN", "Gated-SCNN", "DeepLab"];
  const data_audio = ["Recurrent Neural Network"];
  const data_gen = ["GPT", "DCGAN", "CycleGAN", "AdversialFGSM"];
  const empt = [];
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const [state3, setstate3] = useState(false);
  const [state4, setstate4] = useState(false);
  const [state5, setstate5] = useState(false);
  const data1 = state1 ? data_baremetal : empt;
  const data2 = state2 ? data_text : empt;
  const data3 = state3 ? data_imgseg : empt;
  const data4 = state4 ? data_audio : empt;
  const data5 = state5 ? data_gen : empt;
  function Options(opt) {
    const arr = opt.data;

    return (
      <div className="options">
        {arr.map((data) => {
          return (
            <>
              <Link to="/Configure" style={{ textDecoration: "none", color: "black" }}>
                <div className="option-palette">{data}</div>
                <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>
              </Link>
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div className="contain">
      <div className="empty"></div>
      <div className="selectiontext">
        Train<span style={{ color: "#EA7AD1" }}>→</span>Test<span style={{ color: "#D75E98" }}>→</span>validate<span style={{ color: "#9558A5" }}>→</span>use.
      </div>
      <div className="button-container">
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onClick={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
            >
              Bare Metal
            </button>
          </div>
          <Options data={data1} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onClick={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
            >
              Text
            </button>
          </div>
          <Options data={data2} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onClick={(e) => {
                setstate3(!state3);
                e.preventDefault();
              }}
            >
              Image Segmentation
            </button>
          </div>
          <Options data={data3} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onClick={(e) => {
                setstate4(!state4);
                e.preventDefault();
              }}
            >
              Audio
            </button>
          </div>
          <Options data={data4} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onClick={(e) => {
                setstate5(!state5);
                e.preventDefault();
              }}
            >
              Genratives
            </button>
          </div>
          <Options data={data5} />
        </div>
      </div>
      <div className="selectiontext2">
        <span style={{ fontSize: "6vh" }}>Pretrained model for many use cases.</span>
      </div>
    </div>
  );
}
{
  /* <div className="options">
            <div className="option-palette">Deep Neural net</div>
            <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>
            <div className="option-palette">Convolutional Neural net</div>
            <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>

            <div className="option-palette">Support Vector machine</div>
            <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>
          </div> */
}
