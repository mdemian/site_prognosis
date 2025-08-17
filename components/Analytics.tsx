'use client'

import Script from 'next/script'

export function Analytics() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

    if (!GA_MEASUREMENT_ID && !GTM_ID) {
        return null
    }

    return (
        <>
            {/* Google Analytics 4 */}
            {GA_MEASUREMENT_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
                    </Script>
                </>
            )}

            {/* Google Tag Manager */}
            {GTM_ID && (
                <>
                    <Script id="google-tag-manager" strategy="afterInteractive">
                        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
                    </Script>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                </>
            )}

            {/* LinkedIn Insight Tag */}
            <Script id="linkedin-insight" strategy="afterInteractive">
                {`
          _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
            </Script>
            <Script id="linkedin-insight-script" strategy="afterInteractive">
                {`
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    alt=""
                    src="https://px.ads.linkedin.com/collect/?pid=YOUR_LINKEDIN_PARTNER_ID&fmt=gif"
                />
            </noscript>
        </>
    )
}
