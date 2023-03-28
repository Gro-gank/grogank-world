<template>
  <div class="modal" v-if="isOpenEdit" @click="handleClose">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <div class="title">Edit</div>
        <div class="close-modal" @click="handleClose">x</div>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpenEdit: {
      type: Boolean,
    },
    handleCloseEdit: {
      type: Function,
    },
  },
  setup(props) {
    const handleClose = () => {
      props.handleCloseEdit();
    };
    return {
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  .modal-container {
    width: 100rem;
    height: 70vh;
    overflow-y: scroll;
    margin: auto;
    margin-top: 100px;
    background: #2a2a2a;
    border: 0.2rem solid #888;
    border-radius: 1rem;
    padding: 10px 20px;
    &::-webkit-scrollbar {
      width: 0.3rem;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--light-yellow);
      outline: 1px solid slategrey;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 2rem;
      color: var(--light-color);
      margin-bottom: 2rem;
      .close-modal {
        padding: 0.1rem 2.1rem;
        background-color: red;
        border-radius: 1rem;
        cursor: pointer;
        &:hover {
          color: black;
        }
      }
    }
    .modal-body {
      display: flex;
    }
  }
}
</style>
