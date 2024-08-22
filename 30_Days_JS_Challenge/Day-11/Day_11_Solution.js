// Task-1:
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise under set time out-1");
  }, 2000);
});

// Task-2:
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error sent after 2-second timeout");
  }, 2000);
});
secondPromise.catch((message) => {
  console.log(message);
});

// Task-3:
let url =
  "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("First Promise: Fetch complete");
    return response.json();
  })
  .then((data) => {
    console.log("Second Promise: Data processed");
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Third Promise: Simulated processing complete");
      }, 2000);
    });
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error occurred:");
    console.log(error);
  });

// Task-4:
async function taskFour() {
  let response = await new Promise((resolve, reject) => {
    resolve("Promise resolved in fourth task");
  });
  console.log(response);
}

taskFour();

// Task-5:
async function taskFive() {
  try {
    let response = await new Promise((resolve, reject) => {
      reject("Promise rejected in fifth task");
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

taskFive();

// Task-6:
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("There was a problem with the fetch operation: ", error);
  });

// Task-7:
async function fetchData() {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("There was a problem with the fetch operation: ", error);
  }
}

fetchData();

// Task-8:
const task8Promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const task8Promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const task8Promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([task8Promise_1, task8Promise_2, task8Promise_3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

// Task-9:
const task9Promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const task9Promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const task9Promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.race([task9Promise_1, task9Promise_2, task9Promise_3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
