import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import image from "../assets/icons/asteroid.png";

import "./Configure.css";
export default function Configure() {
  const data_baremetal = ["Upload training and testing data"];
  const data_text = [];
  const data_imgseg = [" Configure network layers and parameters"];
  const data_audio = [];
  const data_gen = ["Confidence of model will be generated when training/testing is finished "];
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
              <div className="option-palette">{data}</div>
              {/* <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr> */}
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div className="contain">
      <div className="empty"></div>
      {/* <div className="selectiontext">
        Train<span style={{ color: "#EA7AD1" }}>→</span>Test<span style={{ color: "#D75E98" }}>→</span>validate<span style={{ color: "#9558A5" }}>→</span>use.
      </div> */}
      <div className="button-container">
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onMouseEnter={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
            >
              Input Data
            </button>
          </div>
          <Options data={data1} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onMouseEnter={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
            >
              Pre Proccessing
            </button>
          </div>
          <Options data={data2} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onMouseEnter={(e) => {
                setstate3(!state3);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate3(!state3);
                e.preventDefault();
              }}
            >
              Layers configuration
            </button>
          </div>
          <Options data={data3} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onMouseEnter={(e) => {
                setstate4(!state4);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate4(!state4);
                e.preventDefault();
              }}
            >
              Train network
            </button>
          </div>
          <Options data={data4} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style"
              onMouseEnter={(e) => {
                setstate5(!state5);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate5(!state5);
                e.preventDefault();
              }}
            >
              Confidence
            </button>
          </div>
          <Options data={data5} />
        </div>
      </div>
      {/* <div className="selectiontext2">Pretrained model for many use cases.</div> */}
      <div style={{ flex: 0.5 }}>
        <button
          className="button-api"
          onMouseEnter={(e) => {
            setstate5(!state5);
            e.preventDefault();
          }}
          onMouseLeave={(e) => {
            setstate5(!state5);
            e.preventDefault();
          }}
        >
          <span className="api-text">Generate API</span>
        </button>
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
