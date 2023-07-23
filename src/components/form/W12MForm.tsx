import W12MHeader from '../form/W12MHeader';
import SpeciesName from './form-fields/SpeciesName';
import PlanetName from './form-fields/PlanetName';
import MathsQuestion from './form-fields/MathsQuestion';
import ReasonForSparing from './form-fields/ReasonForSparing';
import SubmitButton from './form-fields/SubmitButton';

const W12MForm = () => {
  return (
    <section className='w12MForm'>
      <W12MHeader />
      <form>
        <SpeciesName />
        <PlanetName />
        <MathsQuestion />
        <ReasonForSparing />
        <SubmitButton />
      </form>
    </section>
  );
};

export default W12MForm;
