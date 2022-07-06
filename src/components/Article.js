import {Content, Title} from "./index";
//import Content from "./Content";
//import Title from "./Title";

const Article = (props) => {
    return(
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;