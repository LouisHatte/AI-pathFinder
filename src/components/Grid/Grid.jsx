import 'components/Cell/Cell';
import Cell from 'components/Cell/Cell';

import './Grid.scss';

const Grid = () => {
    return (
        <div className="Grid">
            {[...Array(1000)].map((e, i) => <Cell key={i} />)}
        </div>
    );
};

export default Grid;
