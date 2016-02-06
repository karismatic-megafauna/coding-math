// TODO: animate in an interesting way or remove
export const sinAndCos = {
  tearDown() {
    // nothing to do yet
  },
  setUp() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const height = canvas.height = window.innerHeight;
    const randNum = (Math.floor(Math.random() * 300) + 100);

    context.translate(0, height / 2);
    context.scale(1, -1);

    for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
      // Some fun randoms!
      // const x = angle * (Math.floor(Math.random() * 300) + 100);
      // const x = angle * Math.random() * 300;
      const x = angle * 300;
      let y = 0;

      // create Sin
      y = Math.sin(angle) * randNum;
      context.fillStyle = 'black';
      context.fillRect(x, y, 5, 5);

      // create Cos
      y = Math.cos(angle) * randNum;
      context.fillStyle = 'red';
      context.fillRect(x, y, 5, 5);
    }
  },
};
