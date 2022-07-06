import {Content, Title} from "./index";

const Article = (props) => {
    return(
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;