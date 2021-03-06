import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import image from "../assets/icons/asteroid.png";

import "./Selection.css";
export default function Selection() {
  const data_baremetal = ["Deep Neural net", "Convolutional Neural net", "Support Vector machine"];
  const pretrained_baremetal = [false, false, false];

  const data_text = ["Naive Bayes Classifier", "Word2Vec", "Bert", "Transformers"];
  const pretrained_text = [false, true, true, false];

  const data_imgseg = ["U-Net", "Fast-FCN", "Mask-RCNN", "Gated-SCNN", "DeepLab"];
  const pretrained_imgseg = [true, false, true, false, false];

  const data_audio = ["Recurrent Neural Network"];
  const pretrained_audio = [false];

  const data_gen = ["GPT", "DCGAN", "CycleGAN", "AdversialFGSM"];
  const pretrained_gen = [true, false, false, false];

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
    const arr2 = opt.preT;
    return (
      <div className="options-section">
        {arr.map((data, index) => {
          return (
            <>
              <Link to="/Configure" style={{ textDecoration: "none", color: "black" }} state={{ from: data }}>
                <div className="option-palette-section">
                  {data}
                  {arr2[index] ? (
                    <div className="pretrained-container">
                      <div className="pretrained-config">Pre-Trained</div>
                    </div>
                  ) : null}
                </div>

                <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr>
              </Link>
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div className="container-section">
      <div className="empty-section"></div>
      <div className="selectiontext">
        Train<span style={{ color: "#EA7AD1" }}>???</span>Test<span style={{ color: "#D75E98" }}>???</span>validate<span style={{ color: "#9558A5" }}>???</span>use.
      </div>
      <div className="button-container-section">
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style-section"
              onClick={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
            >
              Bare Metal
            </button>
          </div>
          <Options data={data1} preT={pretrained_baremetal} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style-section"
              onClick={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
            >
              Text
            </button>
          </div>
          <Options data={data2} preT={pretrained_text} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style-section"
              onClick={(e) => {
                setstate3(!state3);
                e.preventDefault();
              }}
            >
              Image Segmentation
            </button>
          </div>
          <Options data={data3} preT={pretrained_imgseg} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style-section"
              onClick={(e) => {
                setstate4(!state4);
                e.preventDefault();
              }}
            >
              Audio
            </button>
          </div>
          <Options data={data4} preT={pretrained_audio} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
          <div className="buttonlink">
            <button
              className="button-style-section"
              onClick={(e) => {
                setstate5(!state5);
                e.preventDefault();
              }}
            >
              Genratives
            </button>
          </div>
          <Options data={data5} preT={pretrained_gen} />
        </div>
      </div>
      <div className="selectiontext2">
        <div className="bottom-text">Pretrained model for many use cases.</div>
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
