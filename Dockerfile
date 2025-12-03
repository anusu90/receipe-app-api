FROM python:alpine3.21
LABEL maintainer="anusu90@gmail.com"

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt
COPY ./app /app

WORKDIR /app

EXPOSE 8000

ARG DEV=false

# Install PostgreSQL development libraries and build dependencies
RUN apk add --no-cache \
    postgresql-dev \
    gcc \
    python3-dev \
    musl-dev

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    if [ $DEV = "true" ]; \
        then /py/bin/pip install -r /tmp/requirements.dev.txt; \
    fi && \
    rm -rf /tmp && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

# Remove build dependencies to reduce image size (keep postgresql-libs for runtime)
RUN apk del --no-cache gcc python3-dev musl-dev && \
    apk add --no-cache postgresql-libs

ENV PATH="/py/bin:$PATH"

# We switch to this user to avoid running as root.
USER django-user
    


