FROM ubuntu:20.04

WORKDIR /usr/app

RUN apt-get update && apt-get install -y \
    cmake \
    g++ \
    make

COPY . /usr/app

RUN cmake .
RUN cmake --build .

CMD ["./server"]