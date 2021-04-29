import { AiOutlineWhatsApp } from 'react-icons/ai'

export default ({likes}) => (
    <div className="meta">
        <a href="https://api.whatsapp.com/send?phone=593996322016"><AiOutlineWhatsApp />Request Info</a>
        
        {/* <a href="/"><MdModeComment />{likes}</a> */}
        <style>{`
        .meta{
            padding: 5px;
            background: var(--light-gray);
            border-top: 1px solid #dce2e4;
            overflow: auto;
        }
        .meta p {
            color: #000000;
            margin: 5px 10px 20px;
            padding-top: 9px;
        }
        .meta a {
            text-decoration: none;
            float: left;
            width: 100%;
            text-align: center;
            padding: 9px 0;
            color: green;            
        }
        .meta svg {
            font-size: 1.3rem;
            margin-right: 3px;
        }
        `}</style>
    </div>
)