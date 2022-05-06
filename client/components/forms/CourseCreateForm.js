import { SaveOutlined } from "@ant-design/icons";
import { Avatar, Button, Select, Badge } from "antd";

const { Option } = Select;
const CourseCreateForm = ({
  handleChange,
  handleImage,
  handleSubmit,
  values,
  setValues,
  preview,
  uploadButtonText,
  
  handleImageRemove = (f) => f,
  editPage = false,
}) => {
  const children = [];
  for (let i = 9.99; i <= 99.99; i++) {
    children.push(<Option key={i.toFixed(2)}> ${i.toFixed(2)}</Option>);
  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group pt-3">
        <textarea
          name="description"
          cols="7"
          rows="7"
          value={values.description}
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-row pt-3 d-flex   ">
        <div className="col">
          <div className="form-group">
            <Select
              style={{ width: "95%" }}
              size="large"
              value={values.paid}
              onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
            >
              <Option value={true}>Paid</Option>
              <Option value={false}>Free</Option>
            </Select>
          </div>
        </div>
        {values.paid && (
          <div className="col">
            <div className="form-group">
              <Select
                defaultValue="$9.99"
                style={{ width: "100%" }}
                onChange={(v) => setValues({ ...values, price: v })}
                tokenSeparators={[,]}
                size="large"
              >
                {children}
              </Select>
            </div>
          </div>
        )}
      </div>
      <div className="form-group pt-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-row pt-3 d-flex ">
        <div className="col pe-2">
          <div className="form-group ">
            <label className="btn btn-outline-secondary btn-block text-left d-block gap-2">
              {uploadButtonText}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>
        {preview && (
          <Badge count="X" onClick={handleImageRemove} className="pointer">
            <Avatar width={200} src={preview} />
          </Badge>
        )}
         {editPage && values.image && (
              <Avatar width={200} src={values.image.Location} />
            )}
        
      </div>
      <div className="row pt-3">
        <div className="col">
          <Button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-primary"
            loading={values.loading}
            icon={<SaveOutlined />}
            type="primary"
            size="large"
            shape="round"
          >
            {values.loading ? "Saving .." : "Save & Continue"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CourseCreateForm;
