import Base from '.';
import mock from './mock';
import gridMock from '../../components/GridSection/mock';
import GridSection from '../../components/GridSection';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridSection {...gridMock} />
      </>
    ),
    ...mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
