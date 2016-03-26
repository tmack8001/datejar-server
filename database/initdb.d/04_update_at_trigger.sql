CREATE FUNCTION sync_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at := NOW();

  RETURN NEW;
END;
$$ LANGUAGE PLPGSQL;

CREATE TRIGGER
  sync_updated_at
BEFORE UPDATE ON
  activities
FOR EACH ROW EXECUTE PROCEDURE
  sync_updated_at();

CREATE TRIGGER
  sync_updated_at
BEFORE UPDATE ON
  activity_images
FOR EACH ROW EXECUTE PROCEDURE
  sync_updated_at();
