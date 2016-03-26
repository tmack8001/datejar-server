CREATE TABLE activities (
  id         BIGSERIAL PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  subtitle   TEXT         NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE activity_images (
  id          BIGSERIAL PRIMARY KEY,
  activity_id BIGSERIAL REFERENCES activities(id),
  uri         VARCHAR(1000) NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW(),
  updated_at  TIMESTAMP DEFAULT NOW()
)
