import {Content, Title} from "./Index";

const Article = (props) => {
    return(
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;