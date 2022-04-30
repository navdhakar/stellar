import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/icons/asteroid.png";
import { server } from "../../configure";
import "./Configure.css";
import axios from "axios";
export default function Configure() {
  const location = useLocation();
  const { from } = location.state;

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [selectfile, setselectfile] = useState(false);
  const [uploadstats, setuploadstats] = useState();
  const [uploadcomp, setuploadcomp] = useState(false);
  const [progress, setProgress] = useState(0);
  const data_baremetal = ["Upload training and testing data with labels(if large dataset, upload data in ~1GB chunk each time)"];
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

  useEffect(() => {
    setuploadstats("");
  }, []);

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
    setIsFilePicked(true);
  };
  const handleSubmission = (e) => {
    // const header_profile_data = {
    //   // "Content-Type": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // };
    // if (getCookie("auth_token") != null || undefined) {
    //   header_profile_data.authorization = getCookie("auth_token");
    //   console.log(header_profile_data);
    // } else {
    //   console.log(header_profile_data);
    // }
    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append(`file`, selectedFile[i]);
    }
    console.log(selectedFile[0]);
    axios
      .post(`${server}/data_upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }, // *GET, POST, PUT, DELETE, etc.
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((100 * progressEvent.loaded) / progressEvent.total);
          setProgress(progress);
        },
      })
      .then((result) => {
        console.log("Success:", result);
        setuploadstats("upload complete");
        setuploadcomp(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setuploadstats("error in upload");
      });
    e.preventDefault();
  };
  function Options(opt) {
    const arr = opt.data;

    return (
      <div className="options-config">
        {arr.map((data) => {
          return (
            <>
              <div className="option-palette-config">{data}</div>
              {/* <hr style={{ borderTop: " 2px solid #8E8E8E", borderBottom: "0px", borderRadius: "5px", margin: "1em 3%" }}></hr> */}
            </>
          );
        })}
      </div>
    );
  }
  function Upload() {
    return (
      <div className="options-config" style={{ marginTop: "5px" }}>
        <div className="option-palette-config" style={{ display: "flex", flexDirection: "column" }}>
          <input type="file" onChange={changeHandler} style={{ marginBottom: "5px" }} multiple />

          <button onClick={handleSubmission} style={{ width: "40%", marginBottom: "5px" }}>
            upload
          </button>
          {uploadcomp ? <div style={{ color: "#696969" }}>{progress}%</div> : <div style={{ color: "#696969" }}>{progress - 1}%</div>}

          <div>
            {uploadcomp ? <span style={{ color: "green" }}>✓</span> : null} {uploadstats}{" "}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-config">
      {" "}
      <div className="selectiontext">{from}</div>
      {/* <div className="selectiontext">
        Train<span style={{ color: "#EA7AD1" }}>→</span>Test<span style={{ color: "#D75E98" }}>→</span>validate<span style={{ color: "#9558A5" }}>→</span>use.
      </div> */}
      <div className="button-container-config">
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink">
            <button
              className="button-style-config"
              onMouseEnter={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate1(!state1);
                e.preventDefault();
              }}
              onClick={() => setselectfile(!selectfile)}
            >
              Input Data
            </button>
          </div>
          <Options data={data1} />
          {selectfile ? <Upload /> : null}
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink-config">
            <button
              className="button-style-config"
              onMouseEnter={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
              onMouseLeave={(e) => {
                setstate2(!state2);
                e.preventDefault();
              }}
            >
              Data Parameters
            </button>
          </div>
          <Options data={data2} />
        </div>
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center", flex: 1 }}>
          <div className="buttonlink-config">
            <button
              className="button-style-config"
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
          <div className="buttonlink-config">
            <button
              className="button-style-config"
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
          <div className="buttonlink-config">
            <button
              className="button-style-config"
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
      <div style={{ flex: 0.5, display: "flex", justifyContent: "center" }}>
        <button className="button-api-config">
          <span className="api-text-config">Generate API</span>
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
