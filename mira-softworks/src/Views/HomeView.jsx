import Data from "../Assets/Data/data.json"
import RowCardContent from "../layouts/RowCardContent";

const feedData = Data.data[0].feed;

function HomeView() {
    return <div>
        <RowCardContent title="Feed" contentData={feedData} />
    </div>
}

export default HomeView;