import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Virtual Comics' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div className="app">
            <header>
                <h1><Link href={{ pathname: '/' }}><a>Catalog</a></Link></h1>
                <h2>Comics</h2>
            </header>
            
            { children }

            <style global jsx>{`
            :root {
                --green:  #65C5D9; 
                --white: #F4F5F7;
                --light-gray: #EAEEEF;
            }
            @import url('https://fonts.googleapis.com/css?family=Oleo+Script');
            @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
            @import url('https://fonts.googleapis.com/css?family=Changa:800');
            @media screen { * , *:after,*:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box;  box-sizing: border-box;	} }* {margin: 0; padding: 0;}
            html { font-size: 62.5%; height: 100%; } /*base sizee*/
            body { height: 100%;
                font-family: sans-serif;
                background: #fdfdfd; 
                color: #F7F7F7; 
                font-size: 1.4rem; } /* =14px all type sizes are relative to the base size*/
            .app{
                // width: 80%;
                // margin: auto;
                // overflow: auto;
            }
        `}</style>
            <style jsx>{`
            header{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            header h1 a{
                font-family: 'Oleo Script', cursive;
                font-family: 'Changa', sans-serif;
                font-size: 20rem;
                color: #222222;
                text-shadow: #999999 0px 0 40px;
                letter-spacing: -10px;
                display: inline-block;
                text-decoration: none;
            }
            h2{
                font-size: 10rem;
                color: white;
                text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                letter-spacing: normal;
                font-weight: normal;
                font-family: 'Dancing Script', cursive;
                position: absolute;
                top: 50%;
                left: 50%;
            }
            footer {
                clear: both;
                display: inline-block;
                width: 100%;
                margin-top: 200px;
                text-align: center;
                padding: 4px 0;
            }
            @media only screen and (max-width: 768px) {
                header h1 a{
                    font-size:10rem;
                }
                h2{
                    font-size:5rem;
                }
            }
              
        `}</style>
        </div>
    </div>
)