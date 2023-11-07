# whisper-monorepo

>💨 Whisper is an anonymous group-chat application for university class.

<br>

### Idea

<br>

⚠️ **Problem**

- During lectures, students often **find it difficult to ask questions directly** to the professor.
    - Raising their hands and speaking up can be intimidating(especially in Korea!), and there are instances where students lose focus and miss important content during class.
- There is a **lack of platforms** for students to share their opinions and engage in discussions **about specific lecture**.
    - While platforms like “에브리타임” or “고파스” exist for university students, they are more general community platforms, and it's challenging for students in the same class to communicate effectively.

🪄 **Solution**

**Create individual chat rooms for each specific lecture, allowing students to freely join the chat room corresponding to their class.**

- In these chat rooms, all students can engage in discussions anonymously, enabling them to express their thoughts without hesitation.
- By having real-time chat rooms dedicated to each lecture, our platform facilitates quicker sharing of opinions and questions related to the course compared to traditional community platforms.

<br>

### How to install
<br>

You should install Docker and docker-compose to run this project. <br>
Normally, docker-compose is **automatically installed with docker**. If is not, download in [here](https://github.com/docker/compose/releases).
```bash
git clone https://github.com/COSE451-2023-2-Team2/whisper-monorepo
docker-compose up -d
```

You can access the client with `http://localhost:3000`. <br>
If you want to communicate between multiple clients, change the `ws://localhost:8000` to the running server's ip address. <br> (in `client/src/hooks/useSocket.tsx`)

<br>

### Individual Repository
<br>

You can check each commit record in individual repository.

- Client: https://github.com/COSE451-2023-2-Team2/whisper-client
- Server: https://github.com/COSE451-2023-2-Team2/whisper-server

<br>

### Authors
<br>

This project is built by **team CESCO in COSE451**, Korea Univ.


