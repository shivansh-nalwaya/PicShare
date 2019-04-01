import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PicContaner = styled.div`
  position: relative;
  width: 650px;
  height: 400px;
  border: 5px solid #262626;
  background: black;
  border-radius: 10px;
  box-shadow: 0px 50px 100px #262626;
`;

const ImageContaner = styled.div`
  width: 650px;
  height: 400px;
  position: absolute;
  z-index: 0;
  transition: 1s;
`;

const Right = styled.div`
  position: absolute;
  height: 100%;
  width: 60px;
  z-index: 99;
  cursor: pointer;
  color: #fff;
  transition: 1s;
  right: 0;
  top: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  &:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f105";
    font-size: 50px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) scale(0.75);
    margin-right: 10px;
    transition: 0.5s;
  }

  &:hover:before {
    transform: translateY(-50%) scale(1);
  }
`;

const Left = styled.div`
  position: relative;
  height: 100%;
  width: 60px;
  z-index: 99;
  cursor: pointer;
  color: #fff;
  transition: 1s;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  &:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f104";
    font-size: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scale(0.75);
    margin-left: 10px;
    transition: 0.5s;
  }

  &:hover:before {
    transform: translateY(-50%) scale(1);
  }
`;

const Dot = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  z-index: 99;
  background: #333;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0px 0px 5px #fff;

  &:hover {
    background: #fff;
  }
`;

const Info = styled.div`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Fira Sans", sans-serif;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.75);
`;

const Image = props => {
  return (
    <img
      alt="Pic"
      src={props.src}
      style={{ width: "640px", height: "390px", transition: "1s" }}
    />
  );
};

export default class Home extends Component {
  render() {
    return (
      <Container>
        <PicContaner>
          <Info />
          <ImageContaner>
            <Image src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/28.01.2017/bresim/Nehir-Ve-Doga-Manzarasi-HD-Wallpapers.jpg" />
          </ImageContaner>
          <ImageContaner>
            <Image src="http://3.bp.blogspot.com/-M4taDE-t9c8/U6bQ-7Y-AfI/AAAAAAAACdM/-n9kmDQI7Lk/s1600/doga-hd-wallpaper-hd-resim.jpg" />
          </ImageContaner>
          <ImageContaner>
            <Image src="http://1.bp.blogspot.com/-eTaD7Gdgy8c/UrA6fTbCBiI/AAAAAAAACOE/SDiPTpBGH3c/s1600/doga-balon-wallpaper-1980x1200.jpg" />
          </ImageContaner>
          <ImageContaner>
            <Image src="https://cdn.wallpapersafari.com/7/90/uK6U2o.jpg" />
          </ImageContaner>
          <Left />
          <Right />
          <Dot style={{ marginLeft: -30 }} />
          <Dot style={{ marginLeft: -10 }} />
          <Dot style={{ marginLeft: 10 }} />
          <Dot style={{ marginLeft: 30 }} />
        </PicContaner>
      </Container>
    );
  }
}
