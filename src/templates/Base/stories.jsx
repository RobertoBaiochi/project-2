import Base from '.';
import mock from './mock';
import gridMock from '../../components/GridSection/mock';
import GridSection from '../../components/GridSection';

export const mockBase = {
  children: (
    <>
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} />
    </>
  ),
  ...mock,
};

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
