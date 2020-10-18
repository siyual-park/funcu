import run from "./run";

class Counter {
  count = 0;
}

it("run", () => {
  const count = run(new Counter(), (receiver) => {
    return receiver.count + 1;
  });

  expect(count).toBe(1);
});

it("run single", () => {
  const counter = run(() => {
    return new Counter();
  });

  expect(counter.count).toBe(0);
});
