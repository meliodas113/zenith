import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className='shop-by-category' id='categories'>
      <div className='categories'>
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className='category'
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <div className='hover-div'>{item.attributes.title}</div>
            <img
              src={
                item.attributes.img.data[0].attributes.url
              }
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
