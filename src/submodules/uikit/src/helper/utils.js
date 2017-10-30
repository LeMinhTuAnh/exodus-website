export async function initFetchAction(context, actions) {
  if (!process.env.BROWSER || (!window || !window.APP_STATE)) {
    const promises = [];
    actions.forEach(
      action => {
        promises.push(new Promise((resolve) => {
          action(resolve);
        }));
      },
      this,
    );

    if (!process.env.BROWSER) {
      await Promise.all(promises);
    }
  }
}

export default function () {}
