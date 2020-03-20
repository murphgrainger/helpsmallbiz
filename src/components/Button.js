import React from 'react';

export default (props) => {
  return (
    <a className={`button button-${props.class}`} href={props.url}>{props.text}</a>
  )
}
