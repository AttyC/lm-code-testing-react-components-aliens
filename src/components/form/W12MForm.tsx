import W12MHeader from '../form/W12MHeader';


const W12MForm = () => {
  return (
    <section className='w12MForm'>
      <W12MHeader />
      <form>
        <label htmlFor='species'>Species name:</label>
        <input type='text' name='species' />
        <label htmlFor='planet'>Planet name:</label>
        <input type='text' name='planet' />

        <label htmlFor='beings'>Number of beings:</label>
        <input type='number' name='beings' />

        <label htmlFor='maths-question'>What is 2+2?</label>
        <select name='maths-question'>
          <option value='not4'>not4</option>
          <option value='4'>4</option>
        </select>

        <label htmlFor='reason'>Reason for sparing:</label>
        <textarea name='reason' rows={5} cols={30}></textarea>
      </form>
    </section>
  );
};

export default W12MForm;
