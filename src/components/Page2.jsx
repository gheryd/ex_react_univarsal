import React from 'react';
import Message from "./Message";
import Layout from './Layout';

const Page2 = () => {

    return (
      <Layout>
        <div className="page">
          <span className="comp">component 'Page2'</span> 
          <h1>Page 2</h1>
          <Message message="message 1" />
          <Message message="message 2" />
          <Message message="message 3" />
        </div>
      </Layout>
    );
  
  }

  export default Page2;