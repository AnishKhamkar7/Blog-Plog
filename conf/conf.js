const conf = {
  appWriteUrl: String(process.env.REACT_APPWRITE_URL),
  appWriteProjectId: String(process.env.REACT_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(process.env.REACT_APPWRITE_DB_ID),
  appWriteBucketId: String(process.env.REACT_APPWRITE_COLLECTION_ID),
  appWriteCollectionId: String(process.env.REACT_APPWRITE_BUCKET_ID),
};

export default conf;
