import { Fragment } from "react";
export const SocialIcons = () =>{
  return(
    <Fragment>
      <i className = "facebook icon"></i>
      <i className = "twitter icon"></i>
    </Fragment>
    
  )
}

export const Footer = (props) => {
  return (
    <div className='ui segment cart-footer'>
      <a href ="#" className='ui primary link'>Back to Shopping</a>
    <span className="openning-time">
      {props.opening}
    </span>
    <div className='scial-link'><SocialIcons /></div>
    </div>
  );
}