import React, { useState } from 'react';

import SingIn from './SignIn.js'

export default () => {
  const [name, setName] = useState('');
  console.log({ name })
  
  return <SingIn setName={setName} />;
};
