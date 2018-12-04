import React from 'react';
import Message from "./Message";
import Layout from './Layout';

const Page1 = ({message}) => {

    return (
      <Layout>
        <div className="page">
          <span className="comp">component 'Page1'</span>          
          <h1>Page 1</h1>
          <Message message={message} />
        </div>
      </Layout>
     
    );
  
  }

  export default Page1;