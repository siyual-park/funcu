import apply from "./apply";

class Counter {
  count = 0;
}

it("apply", () => {
  const counter = apply(new Counter(), (receiver) => {
    // eslint-disable-next-line no-param-reassign
    receiver.count += 1;
  });

  expect(counter.count).toBe(1);
});
