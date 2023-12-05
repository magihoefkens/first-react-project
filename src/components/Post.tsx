
interface PostProps {
    title:string;
    content:string;
}
export default function Post({title,content}:PostProps){

    return(
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    )

}