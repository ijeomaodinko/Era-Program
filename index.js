const speakersArray = [
  // {
  //   name: 'Ezzra Pritol',
  //   role: 'Ceo of at Era',
  //   description: 'studied at howard university ',
  //   photo: 'img/speaker_01.png',
  // },
  // {
  //   name: 'Kam Chon',
  //   role: 'Head front end team at Era',
  //   description: 'Kilnam studied IT at Barclays High school.',
  //   photo: 'img/speaker_03.png',
  // },
  {
    name: 'SohYeong Noh',
    role: 'Head back end web developers team Era',
    description: 'SohYeong studied IT at Havard High school as a back end web developer. ',
    photo: 'img/speaker_02.png',
  },
  {
    name: 'Lila Tretikov',
    role: 'Head technical team at Era',
    description: 'Lila studied IT at oakland High university as a fullstack web developer.',
    photo: 'img/speaker_04.png',
  },
  {
    name: 'Julie Leda',
    role: 'Technical team memeber at Era',
    description: 'Julie studied IT at Havard High school and a backend web developer. ',
    photo: 'img/speaker_06.png',
  },
  {
    name: 'Ryan Merkley',
    role: 'Technical team memeber at Era',
    description: 'Ryan studied IT at Havard High school as a front end developer. ',
    photo: 'img/speaker_05.png',
  },
];

function speakerCreation(speaker) {
  const speakers1 = document.createElement('li');
  speakers1.classList.add('speaker-group');
  speakers1.classList.add('speaker-group1');

  const img1 = document.createElement('img');
  img1.classList.add('speaker-image');
  img1.src = speaker.photo;
  img1.alt = speaker.name;
  speakers1.appendChild(img1);

  const info = document.createElement('div');
  info.classList.add('speaker-desc-holder');

  const name = document.createElement('h3');
  name.classList.add('speaker-name');
  name.innerText = speaker.name;
  info.appendChild(name);

  const job = document.createElement('p');
  job.classList.add('speaker-job');
  job.innerText = speaker.role;
  info.appendChild(job);

  const line = document.createElement('hr');
  line.classList.add('speaker-hr');
  info.appendChild(line);

  const lastP = document.createElement('p');
  lastP.classList.add('speaker-desc');
  lastP.innerText = speaker.description;
  info.appendChild(lastP);

  speakers1.appendChild(info);
  return speakers1;
}

function addspeaker() {
  const coverContainer = document.querySelector('.speakers');
  for (let i = 0; i < speakersArray.length; i += 2) {
    const universalList = document.createElement('ul');
    universalList.classList.add('speakers-group');
    universalList.classList.add('group1-speakers');
    universalList.appendChild(speakerCreation(speakersArray[i]));
    universalList.appendChild(speakerCreation(speakersArray[i + 1]));
    coverContainer.appendChild(universalList);
  }
}

addspeaker();