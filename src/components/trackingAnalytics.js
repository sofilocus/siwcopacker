export default function TrackingAnalytics() {
  return (
    <>
      <meta
        name="facebook-domain-verification"
        content={process.env.FB_DOMAIN_VERIFICATION}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${process.env.PIXEL}');
        fbq('track', 'PageView');
      `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
        <img 
          height="1" width="1" style="display:none" 
          src="https://www.facebook.com/tr?id=${process.env.PIXEL}&ev=PageView&noscript=1"
        />
      `,
        }}
      />


      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.GTM}');
          `,
        }}>
      </script>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM}"
            height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
          `,
        }}
      >
      </noscript>
    </>
  );
}
