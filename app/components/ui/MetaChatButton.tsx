'use client';

import Script from 'next/script';
import React from 'react';

type Props = {};

const MetaChatButton = (props: Props) => {
	return (
		<>
			{/* Messenger Chat Plugin Code  */}
			<div id='fb-root'></div>

			{/* Your Chat Plugin code  */}
			<div
				id='fb-customer-chat'
				className='fb-customerchat'></div>

			<Script id='script-1'>
				{`var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "119115137775935");
          chatbox.setAttribute("attribution", "biz_inbox");`}
			</Script>

			{/* Your SDK code  */}
			<Script id='script-2'>
				{`window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v18.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`}
			</Script>
		</>
	);
};

export default MetaChatButton;
