/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">
          <i className="goTop__text fas fa-chevron-up" />
        </button>
      </div>
    </>
  );
};